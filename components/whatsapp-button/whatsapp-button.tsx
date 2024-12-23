import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5511930957424"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:bg-green-600"
    >
      <ChatBubbleBottomCenterTextIcon className="h-8 w-8" />
    </Link>
  );
}