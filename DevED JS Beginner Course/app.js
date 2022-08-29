function getTipsRating(amount) {
    if (amount === 0) {
      return 'terrible' ;
    }
  
    else if (amount => 1 && amount <= 10) {
      return 'poor' ;
    }
  
    else if (amount => 11 && amount <= 20) {
      return 'good' ;
    }
  
    else if (amount => 21 && amount <= 50) {
      return 'great' ;
    }
  
    else if (amount > 50) {
      return 'excellent' ;
    }
  };