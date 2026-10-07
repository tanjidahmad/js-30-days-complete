function App() {

  const students = [
    { name: "Tanjid", mark: 80 },
    { name: "Rahim", mark: 70 },
    { name: "Karim", mark: 90 }
  ];

  return (
    <div>
      {students.map((student) => (
        <div className="card">
          <h2>name={student.name}</h2>
          <p>Mark: {student.mark}</p>
        </div>
      ))}
    </div>
  );
}