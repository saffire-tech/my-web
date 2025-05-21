import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Check, X } from 'lucide-react';
import toast from 'react-hot-toast';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  message: string;
  created_at: string;
  replied: boolean;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast.error('Failed to load messages');
    } finally {
      setLoading(false);
    }
  }

  async function toggleReplied(id: string, currentStatus: boolean) {
    try {
      const { error } = await supabase
        .from('contacts')
        .update({ replied: !currentStatus })
        .eq('id', id);

      if (error) throw error;

      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, replied: !currentStatus } : msg
      ));
      
      toast.success('Message status updated');
    } catch (error) {
      console.error('Error updating message status:', error);
      toast.error('Failed to update message status');
    }
  }

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Contact Messages</h1>
      
      <div className="grid gap-4">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No messages yet</p>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`bg-white rounded-lg shadow p-6 ${
                message.replied ? 'border-l-4 border-green-500' : 'border-l-4 border-yellow-500'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{message.name}</h3>
                  <p className="text-sm text-gray-600">{message.email}</p>
                  {message.phone && (
                    <p className="text-sm text-gray-600">{message.phone}</p>
                  )}
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">
                    {new Date(message.created_at).toLocaleDateString()}
                  </span>
                  <button
                    onClick={() => toggleReplied(message.id, message.replied)}
                    className={`p-2 rounded-full transition-colors ${
                      message.replied
                        ? 'bg-green-100 text-green-600 hover:bg-green-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    title={message.replied ? 'Mark as unreplied' : 'Mark as replied'}
                  >
                    {message.replied ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <X className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              
              {message.service && (
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Service:</span> {message.service}
                </p>
              )}
              
              <p className="text-gray-700 whitespace-pre-wrap">{message.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}