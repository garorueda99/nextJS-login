import { useRouter } from 'next/router';

export default function login() {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { elements } = event.target;
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <input name='email' type='email' />
      <button>Log in</button>
    </form>
  );
}
