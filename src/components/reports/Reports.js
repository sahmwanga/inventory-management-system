import { Card, Typography, Grid, CardContent } from '@material-ui/core';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Reports = () => {
  const { reports, getReports } = useContext(GlobalContext);

  useEffect(() => {
    const reportsData = getReports();
  }, []);

  return (
    <div>
      <h3>Reports</h3>
      <Grid container spacing={3}>
        {reports &&
          reports.map((report) => (
            <Grid key={report.key} item xs={12} sm={4} md>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {report.key}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {report.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Reports;
