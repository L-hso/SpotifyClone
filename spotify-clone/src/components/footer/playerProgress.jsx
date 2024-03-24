import './footer.scss'

// TODO: criar uma forma de manipular essa barra
// Att: pequena explicação no footer.sccs
export function PlayerProgress() {
  return (
    <div id="progress_info">
      <span>0:00</span>

      <div id="progress_bar"></div>

      <span>3:00</span>
    </div>
  );
}