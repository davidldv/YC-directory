import Hello from '../components/hello';

export default function Home() {
  console.log('What am I? -> SERVER/CLIENT');

  return (
      <>
        <Hello />
        <h1 className={"text-3xl"}>Welcome to Next.js!</h1>
      </>
  );
}
