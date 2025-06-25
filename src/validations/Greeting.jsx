export function Greeting() {
  const now = new Date();
  const hour = now.getHours(); 

  let greeting = "";
  if (hour >= 0 && hour < 12) {
    greeting = "Bom Dia";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Boa Tarde";
  } else {
    greeting = "Boa Noite";
  }

  return (
        <span className="greet">{greeting}</span>
  )
}

