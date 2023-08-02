import { useMemo, useState } from 'react';
import './Header.css';
import { fetchImgurGallery } from '../../services/imgurServices';
import { useDispatch } from 'react-redux';
import { setGalery } from '../../store/slices/galerySlice';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const Header = () => {
  const [section, setSection] = useState('hot');
  const [sort, setSort] = useState('viral');
  const [window, setWindow] = useState('day');
  const dispatch = useDispatch();

  const fetchImgurData = async () => {
    try {
      const data = await fetchImgurGallery(section, sort, window);
      dispatch(setGalery(data));
    } catch (error) {
      console.error(error);
    }
  };

  useMemo(() => {
    fetchImgurData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section, sort, window]);

  return (
    <section className="header_landing">
      <div className="nav">
        <div className="select-input">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">popularity</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={section}
              label="popularity"
              onChange={(e) => setSection(e.target.value)}
            >
              <MenuItem value={'hot'}> Hot</MenuItem>
              <MenuItem value={'top'}> Top</MenuItem>
              <MenuItem value={'user'}> User</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="select-input">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={sort} label="Sort" onChange={(e) => setSort(e.target.value)}>
              <MenuItem value="viral">viral</MenuItem>
              <MenuItem value="top">top</MenuItem>
              <MenuItem value="rising">rising</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="select-input">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Period</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={window}
              label="Period"
              onChange={(e) => setWindow(e.target.value)}
            >
              <MenuItem value="day">day</MenuItem>
              <MenuItem value="week">week</MenuItem>
              <MenuItem value="month">month</MenuItem>
              <MenuItem value="year">year</MenuItem>
              <MenuItem value="all">all</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </section>
  );
};

export default Header;
