export const TimeLine = ({ day, name }) => (
  <div className="line">
    <div className="title">{name}</div>
    <div className="description">
      {
        // day.length
        // 	? <>
        // 		{
        // 			day.map((time,i)=><div key={i} className="row">{time}</div>)
        // 		}
        // 	</>
        // 	: <div className="row red">Closed</div>
      }
    </div>
  </div>
);
