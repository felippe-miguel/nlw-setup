interface HabitProps {
  completed: number;
}

export function Habit(props: HabitProps) {
  return (
    <div className="bg-zinc-900 w-10 h-10 m-2 text-white rounded flex items-center justify-center">
      {props.completed}
    </div>
  );
}