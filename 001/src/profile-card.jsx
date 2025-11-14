export function ProfileCard({item}) {
  
   
        return (
        <div className='container' key={item.name}>
          <img className='img' src={item.img} />
          <h1>{item.name}</h1>
          <p className='para'>{item.description}</p>
            <div className="stats">
               <div className="stat-item">
                   <span className="count">{item.followers}K</span>
                   <span className="label">Followers</span>
               </div>
               <div className="stat-item">
                   <span className="count">{item.following}</span>
                   <span className="label">Following</span>
              </div>
          </div>
            
           
            <button className='btn'>Follow</button>
        
        </div>
        )
  
  
}

