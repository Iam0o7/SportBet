const calculateArbitrage = (odds) => {
    const arbitragePercentage = odds.reduce((sum, odd) => sum + (1 / odd), 0);
    const isArbitrage = arbitragePercentage < 1;
    const profitPercentage = isArbitrage ? (1 - arbitragePercentage) * 100 : 0;
  
    return {
      arbitragePercentage,
      isArbitrage,
      profitPercentage,
    };
  };
  
  const calculateStakes = (odds, totalStake) => {
    const arbitragePercentage = odds.reduce((sum, odd) => sum + (1 / odd), 0);
    const stakes = odds.map(odd => (totalStake / odd) / arbitragePercentage);
    return stakes;
  };
  
  module.exports = { calculateArbitrage, calculateStakes };