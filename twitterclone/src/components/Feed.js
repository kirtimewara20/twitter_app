import CreatePost from './CreatePost';
import Tweet from './Tweet';

export default function Feed() {

  return (
    <div className='w-[50%] border-b border-gray-200 bg-white shadow-lg rounded-lg p-4'>
      <div>
        <CreatePost />
        <Tweet/>
      </div>
    </div>
  );
}
