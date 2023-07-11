import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function Header({catogotyChange}) {
    const [ value, setValue ] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        catogotyChange(newValue);
    };

    return (
        <Box sx={{ maxWidth: { xs: 800, sm: 800 }, bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                <Tab label="India" />
                <Tab label="Politics" />
                <Tab label="Sports" />
                <Tab label="Science" />
                <Tab label="Crypto" />
                <Tab label="Health Care" />
                <Tab label="Education" />
            </Tabs>
        </Box>
    );
}
