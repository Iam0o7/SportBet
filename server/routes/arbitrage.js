const express = require('express');
const { calculateArbitrage, calculateStakes } = require('../utils/arbitrage');

const router = express.Router();

// POST /api/arbitrage/calculate
router.post('/calculate', (req, res) => {
  const { odds, totalStake } = req.body;

  if (!odds || !Array.isArray(odds) || odds.length < 2) {
    return res.status(400).json({ error: 'Invalid odds provided' });
  }

  const { arbitragePercentage, isArbitrage, profitPercentage } = calculateArbitrage(odds);
  const stakes = isArbitrage ? calculateStakes(odds, totalStake || 100) : null;

  res.json({
    arbitragePercentage,
    isArbitrage,
    profitPercentage,
    stakes,
  });
});

module.exports = router;