import { FC } from 'react';
import { Link } from 'react-router-dom';
import './cards.css';

interface Props {
  width?: number;
  height?: number;
  children?: React.ReactNode;
  hasBoxShadow?: boolean;
  justifyContent?: string;
  padding?: number;
  path?: string;
  uri: string;
  animated: boolean;
  id: string;
  pressedItem: any;
}

const Card: FC<Props> = (props: Props) => {
  return (
    <section className="Cardwrapper" style={{ justifyContent: props.justifyContent }}>
      <Link className="tag" to={`/${props.path ? props.path : `discover/${props.id}`}`}>
        <div
          className={props.hasBoxShadow === true ? 'Card' : 'Card_'}
          style={{ width: props.width ? props.width : 450, height: props.height ? props.height : 400, padding: props.padding ? props.padding : 0 }}
        >
          {props.animated ? (
            <video muted draggable={false} autoPlay className="imageCards" controls>
              <source type="video/mp4" src={props.uri} />
            </video>
          ) : (
            <img className="imageCards" src={props.uri} alt={props.uri} />
          )}
          <div className="card-body">
            <div className="card-text">{props.children}</div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Card;
