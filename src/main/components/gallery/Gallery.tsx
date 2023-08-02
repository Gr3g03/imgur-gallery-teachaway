import React from 'react';
import Card from '../cards/cards';
import './Gallery.css';
import { IImgurImage } from '../../interfaces/IImgurImage';
import UseGetGalery from '../../hooks/useGetGalery';
import { useDispatch } from 'react-redux';
import { setSelectedImage } from '../../store/slices/galerySlice';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import VisibilityIcon from '@mui/icons-material/Visibility';
const Gallery: React.FC = () => {
  const gallery = UseGetGalery();
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      {gallery &&
        gallery.map((image: IImgurImage) => (
          <div className="discoverBody" key={image.id}>
            <div className="discoverBodyContiner" onClick={() => dispatch(setSelectedImage(image))}>
              <Card
                pressedItem={image.images && image.images[0]}
                animated={image.images && image.images[0].animated}
                id={image.images && image.images[0].id}
                uri={image.images && image.images[0].link}
                height={400}
                width={300}
                hasBoxShadow={true}
                justifyContent="space-around"
              >
                <p style={{ paddingLeft: 16 }}>{image.title}</p>
                <div className="home_card_child">
                  <div className="cardFooter">
                    <ArrowUpwardIcon color="primary" />
                    <p> {image?.ups}</p>
                    <ArrowDownwardIcon color="primary" />
                    <p>{image?.downs}</p>
                  </div>
                  <div className="cardFooter">
                    <VisibilityIcon color="primary" />
                    <p style={{ alignSelf: 'flex-end' }}>{image?.views}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Gallery;
