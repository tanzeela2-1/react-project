import { data } from './data';
import { ProfileCard } from './profile-card';

export function App() {
  return (
    <div className='main-container'>
      {data.map((item) => {
        return (
        <ProfileCard item={item} key={item.name}/>
        )
      })}
    </div>
  );
}

