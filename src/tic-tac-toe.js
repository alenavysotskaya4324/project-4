class TicTacToe {
    constructor() {
		this.o='o';
		this.x='x';
		
		this.field = [ [null,null,null],[null,null,null],[null,null,null] ];
		this.symbol=1;
    }

    getCurrentPlayerSymbol() {		
		if(this.symbol===0) {		
			return this.o;
		}
		else if(this.symbol===1){		
			return this.x;
		}
			
    }

    nextTurn(rowIndex, columnIndex) {
		if(!this.isFinished()) {
			if(this.field[rowIndex][columnIndex]===null) {
				this.field[rowIndex][columnIndex]=this.getCurrentPlayerSymbol();
				
				if(this.symbol===0)
					this.symbol=1;
				else this.symbol=0;
				
				if(this.isFinished()===true) 
					return;
				
				return this;
			}
			else if(this.field[rowIndex][columnIndex]!==null)
				return this;
		}
    }

    isFinished() {
		if (this.getWinner()!==null)
			return true;
		else if(this.isDraw())
			return true;
		else 
			return false;
		
    }

    getWinner() {
		for(var i=0;i<=2;i++)
			if((this.field[i][0]==='x' && this.field[i][1]==='x' && this.field[i][2]==='x') || 
			(this.field[0][i]==='x' && this.field[1][i]==='x' && this.field[2][i]==='x'))				
				return 'x';
			else if((this.field[i][0]=== 'o' && this.field[i][1]==='o' && this.field[i][2]==='o') || 
			(this.field[0][i]==='o' && this.field[1][i]==='o' && this.field[2][i]==='o'))
				return 'o';
			
			if(this.field[0][0]==='x' && this.field[1][1]==='x' && this.field[2][2]==='x')
				return 'x';
			else if(this.field[0][0]==='o' && this.field[1][1]==='o' && this.field[2][2]==='o')
				return 'o';
				
			if(this.field[0][2]==='x' && this.field[1][1]==='x' && this.field[2][0]==='x')
				return 'x';
			else if(this.field[0][2]==='o' && this.field[1][1]==='o' && this.field[2][0]==='o')
				return 'o';
			
		return null;
		
    }

    noMoreTurns() {
		var count=8;
		
		for(var i=0;i<=2;i++)
			for(var j=0;j<=2;j++)
				if(this.field[i][j]===null)					
					count--;
		if(count===8)
			return true;
		
		return false;
    }

    isDraw() {

		if(this.noMoreTurns() && this.getWinner()===null) 
			return true;
		else return false;
    }

    getFieldValue(rowIndex, colIndex) {		

		return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
