function formatLog(results) {
  return results.reduce(
    (log, { o, lost }) => {
      log.totalRobots++;
      if (lost) {
        log.totalLost++;
        log["totalLostAt" + o]++;
      }
      return log;
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

module.exports = formatLog;
