import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MediaCard from './cardClient';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '50%',
    margin: 'auto',
  },
  card: {
      //margin: theme.spacing(1),
      backgroundColor: 'white',
  },
}));

export default function TabsCarte(listElements) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Pizzas" {...a11yProps(0)} />
          <Tab label="Boissons" {...a11yProps(1)} />
          <Tab label="Desserts" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <div className={classes.card}>
          {listElements.listElements[0].map((value, index) => {
            return <Box pt={2}><MediaCard key={index} element={value} title = 'pizza' pizzas={listElements.pizzas} addPizzas={listElements.addPizzas} boissons={listElements.boissons} addBoissons={listElements.addBoissons} desserts={listElements.desserts} addDesserts={listElements.addDesserts} /></Box>
           })}
        </div></TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        {listElements.listElements[1].map((value, index) => {
            return <Box pt={2}><MediaCard key={index} element={value} title = 'boisson' pizzas={listElements.pizzas} addPizzas={listElements.addPizzas} boissons={listElements.boissons} addBoissons={listElements.addBoissons} desserts={listElements.desserts} addDesserts={listElements.addDesserts}/></Box>
           })}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        {listElements.listElements[2].map((value, index) => {
            return <Box pt={2}><MediaCard key={index} element={value} title = 'dessert' pizzas={listElements.pizzas} addPizzas={listElements.addPizzas} boissons={listElements.boissons} addBoissons={listElements.addBoissons} desserts={listElements.desserts} addDesserts={listElements.addDesserts}/></Box>
           })}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

