// Component to read score from Globals and display in the game

class ScoreReaderComponent extends Component {
    update(){
        this.parent.getComponent("Text").text = "Score: " + Globals.score
    }
}
  
window.ScoreReaderComponent = ScoreReaderComponent