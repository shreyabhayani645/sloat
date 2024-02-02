import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let[time,settime]=useState('');
  let[endtime,setendtime]=useState('');
  let [slots, setSlots] = useState([]);

  // const handlesloat=()=>{
  //   if(time && endtime){
  //     const start = new Date(01/01/2024 ${time});
  //     const end = new Date(01/01/2024 ${endtime});
  //     const end_val=end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  //     if(start<end){
  //       const tempSloats=[];

  //       while(start<end){
  //         const slot={
  //           startTime: start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  //           endTime: new Date(start.getTime() + 10 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  //         };
  //         tempSloats.push(slot);
  //         if(end_val<(slot.endTime))
  //         {
            
  //         }
  //         start.setMinutes(start.getMinutes()+10); 

  //       }
  //       setSlots(tempSloats)
  //     }else{
  //       alert("End time should be after start time");
  //     }
  //   }else{
  //     alert("Enter your Time..!");
  //   }
  // }
  const handlesloat=()=>{
    if(time && endtime){
      const startTime = new Date(`01/01/2024 ${time}`);
      const endTime = new Date(`01/01/2024 ${endtime}`);
      if(startTime<endTime){
        const tempsloat=[];
          while(startTime<endTime) {
            if(new Date(startTime.getTime() + 10 * 60000)<endTime)
            {
              let set_time=new Date(startTime.getTime() + 10 * 60000);
              const slot={
                          start: startTime.getHours()+":"+startTime.getMinutes(),
                          end: set_time.getHours()+":"+set_time.getMinutes()
              }
              tempsloat.push(slot);
            }else{
              let diff=endTime.getMinutes()-startTime.getMinutes();
              alert(diff);
              let set_time=new Date(startTime.getTime() + diff * 60000);
              const slot={
                  start: startTime.getHours()+":"+startTime.getMinutes(),
                  end: set_time.getHours()+":"+set_time.getMinutes()
              }
              tempsloat.push(slot);
            }
            startTime.setMinutes(startTime.getMinutes()+10); 
          }
          setSlots(tempsloat);
      }else{
          alert("End time should be after start time");
      }
    }else{
      alert("Enter Time Or Endtime");
    }
  }
  return (
    <div className="App">
        <div>
          <h1>Sloat Management</h1>
          <div>
            <h4 className='d-inline-block'>Enter Start Time:=</h4>
            <input type='time' onChange={(e)=>settime(e.target.value)}></input>
          </div>
          <div>
            <h4 className='d-inline-block'>Enter End Time:=</h4>
            <input type='time' onChange={(e)=>setendtime(e.target.value)}></input>
          </div>
          <div>
            <input type='button' value={'Generate Sloat'} onClick={handlesloat}></input>
          </div>
        </div>
        <div>
            <h3>Slots:</h3>
            <ul>
              {slots.map((slot, index) => (
                <li key={index}>
                  {slot.start} - {slot.end}
                </li>
              ))}
            </ul>
          </div>
    </div>
  );
}
export default App;