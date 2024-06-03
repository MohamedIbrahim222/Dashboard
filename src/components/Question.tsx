export default function Question({ question, points}: { question: string, points: number}) {
    return (
        <div className="card flex items-start justify-between mb-3">
          <p>{question}</p>
          <span className="badge badge-blue">{points}</span>
        </div>
    );
}