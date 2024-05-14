import { Header } from "@/shared/ui/header";
import { Game } from "@/widgets/game/ui/game";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Game />
    </div>
  );
}
