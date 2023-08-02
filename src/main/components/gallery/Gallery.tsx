import React, { useState } from 'react';
import Card from '../cards/cards';
import './Gallery.css';
import { IImgurImage } from '../../interfaces/IImgurImage';
import UseGetGalery from '../../hooks/useGetGalery';
import { useDispatch } from 'react-redux';
import { setSelectedImage } from '../../store/slices/galerySlice';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Pagination from '@mui/material/Pagination';
const Gallery: React.FC = () => {
  const gallery = UseGetGalery();
  const dispatch = useDispatch();

  const itemsPerPage = 10;
  const totalPages = gallery && gallery.length / itemsPerPage;
  const [currentPage, setCurrentPage] = useState(1);

  const handleOnChange = (event: any, value: number) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = gallery && gallery.slice(startIndex, endIndex);

  return (
    <>
      <div className="wrapper">
        {gallery &&
          currentItems &&
          currentItems.map((image: IImgurImage) => (
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
      <div className="pagination_">
        <div>
          <Pagination className="pagination__" count={totalPages ? totalPages : 0} page={currentPage} onChange={handleOnChange} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
