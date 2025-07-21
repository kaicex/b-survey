import { redirect } from 'next/navigation';

export default function Home() {
  // Перенаправляем на первую страницу опроса
  redirect('/survey/intro');
  
  // Этот код никогда не будет выполнен из-за редиректа выше
  return null;
}
