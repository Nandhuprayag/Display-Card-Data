// import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
// import { CardList } from './CardList';
import { Button } from "@mui/material";

//Declaring the Card Items by declaring the Variable (Array of Objects)
const cardlist=
  [{
    select:"FREE",
    price:"$0",
    month:"/month",
    name:"Single User",
    storage:"5GB Storage",
    projects:"Unlimited Public Projects",
    access:"Community Access",
    private:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    domain:"Free SubDomain",
    reports:"Monthly status"
  },
  {
    select:"PLUS",
    price:"$9",
    month:"/month",
    name:"5 User",
    storage:"50GB Storage",
    projects:"Unlimited Public Projects",
    access:"Community Access",
    private:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    domain:"Free SubDomain",
    reports:"Monthly status"
  
  },
  {
    select:"PRO",
    price:"$49",
    month:"/month",
    name:"Unlimited Users",
    storage:"150GB Storage",
    projects:"Unlimited Public Projects",
    access:"Community Access",
    private:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    domain:"Unlimited Free SubDomain",
    reports:"Monthly status"
  
  }];


function App() 
{
  //Storing the Cardlist in Items variable
  const Items=cardlist;


return (
  //Render page
    <div className="App">
     {/* <nav>
      <ul>
        <li>
          <Link to='/Card'>Cards</Link>
        </li>
      </ul>
     </nav>
 <Routes>
  <Route path='/Card' element={<CardList Items={Items}/>} />
 </Routes> */}
  <div className='card-list'>
  {Items.map((Item, index) =>(<ShowCard card={Item} key={index}/>))}
  </div>

    </div>
  );
}
//Creating a new component to render the Cardlist 
function ShowCard({card})
{
  return(
    <section className="pricing py-5">
    <div className="card-container">
      <div className="row">
        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">{card.select}</h5>
              <h6 className="card-price text-center">{card.price}<span className='period'>{card.month}</span></h6>
              <hr/>
              <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check">✔️</i></span>{card.name}</li>
                <li><span className="fa-li"><i className="fas fa-check">✔️</i></span>{card.storage}</li>
                <li><span className="fa-li"><i className="fas fa-check">✔️</i></span>{card.projects}</li>
                <li><span className="fa-li"><i className="fas fa-check">✔️</i></span>{card.access}</li>
                <li className="text-muted"><span className="fa-li">❌<i className="fas fa-times"></i></span>{card.private}</li>
                <li className="text-muted"><span className="fa-li">❌<i className="fas fa-times"></i></span>{card.support}</li>
                <li className="text-muted"><span className="fa-li">❌<i className="fas fa-times"></i></span>{card.domain}
                </li>
                <li className="text-muted"><span className="fa-li">❌<i className="fas fa-times"></i></span>{card.reports}
                  Reports</li>
              </ul>
              <div className="d-grid">
              <Button  variant="contained">Button</Button>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  </section>
  )
}

export default App;
