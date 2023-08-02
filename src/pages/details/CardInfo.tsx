import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../main/store';
import Grid from '@mui/material/Grid';
import './CardInfo.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ScoreIcon from '@mui/icons-material/Score';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const CardInfo: FC = () => {
  const currentGalery = useSelector((state: RootState) => state.galery.image);
  console.log(currentGalery);

  return (
    <Grid container spacing={1} className="container__">
      <Grid xl={12} className="title__Hedaer">
        <div style={{ flex: 0.5, alignContent: 'start' }}>
          <Link to={'/'}>
            <ArrowBackIcon />
          </Link>
        </div>
        <div style={{ flex: 1, alignSelf: 'center' }}>
          <p>{currentGalery?.title}</p>
        </div>
      </Grid>
      <Grid xl={12} className="divWrapper">
        <Grid item xs={8}>
          {currentGalery && currentGalery.images && currentGalery.images[0].animated ? (
            <video muted draggable={false} autoPlay className="image" controls>
              <source type="video/mp4" src={currentGalery && currentGalery.images[0].link} />
            </video>
          ) : (
            <img src={currentGalery?.images[0].link} alt={currentGalery?.description} />
          )}
        </Grid>
        <Grid className="detailsContainer" xl={3}>
          <div className="ttttt">
            <div className="infoConainer">
              <ArrowUpwardIcon color="primary" />
              <p> {currentGalery?.ups}</p>
            </div>
            <div className="infoConainer">
              <ArrowDownwardIcon color="primary" />
              <p>{currentGalery?.downs}</p>
            </div>
            <div className="infoConainer">
              <ScoreIcon color="primary" />
              <p>{currentGalery?.score}</p>
            </div>
            <div className="infoConainer">
              <VisibilityIcon color="primary" />
              <p>{currentGalery?.views}</p>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid xl={12} className="title__">
        <p>Description : </p>
        <p> {currentGalery?.images[0].description}</p>
      </Grid>
    </Grid>
  );
};

export default CardInfo;
