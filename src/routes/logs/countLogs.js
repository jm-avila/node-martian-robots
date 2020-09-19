function countLogs(logs) {
  return logs.reduce(
    (count, log) => {
      count.totalRobots += log.totalRobots;
      count.totalLost += log.totalLost;
      count.totalLostAtN += log.totalLostAtN;
      count.totalLostAtS += log.totalLostAtS;
      count.totalLostAtW += log.totalLostAtW;
      count.totalLostAtE += log.totalLostAtE;
      return count;
    },
    {
      totalRobots: 0,
      totalLost: 0,
      totalLostAtN: 0,
      totalLostAtS: 0,
      totalLostAtW: 0,
      totalLostAtE: 0,
    }
  );
}

module.exports = countLogs;
