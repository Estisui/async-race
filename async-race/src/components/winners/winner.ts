interface IWinner {
  info: undefined | {id: number, time: number, name: string},
  isKnown: boolean,
  getWinner: () => boolean,
  updateWinner: (id: number, time: number, name: string) => void
}

const winner: IWinner = {
  info: undefined,
  isKnown: true,

  getWinner: () => {
    return winner.isKnown
  },

  updateWinner: (id: number, time: number, name: string) => {
    winner.isKnown = true;
    winner.info = {
      id: id,
      time: time,
      name: name
    };
    const output = document.querySelector('.main__wonBy') as HTMLParagraphElement;
    if (output) {
      output.innerText = `Last race won by ${winner.info.name} within ${winner.info.time / 1000} seconds`;
    }
  }
};

export default winner;