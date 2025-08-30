import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'signup';
  onSubmit: (name: string, password: string) => void;
}

const AuthModal = ({ isOpen, onClose, type, onSubmit }: AuthModalProps) => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, password);
  };

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-modal flex items-center justify-center p-4">
      <div className="bg-card rounded-lg p-8 w-full max-w-md relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-foreground">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 bg-input border-border text-foreground"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="password" className="text-foreground">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 bg-input border-border text-foreground"
                required
              />
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
          >
            {type === 'login' ? 'LOGIN' : 'SIGN UP'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;