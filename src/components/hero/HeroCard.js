import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    const imagePath = `/assets/${id}.jpg`;
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card h-100">
                <div className="row no-gutters p-2">
                    <div className="col-md-4">
                        <img
                            src={imagePath}
                            className="card-img shadow"
                            alt={superhero}
                        />
                    </div>
                    <div className="col-md-8">
                        <Link style={{textDecoration:'none'}} to={`/hero/${id}`}>
                            <h5  className="card-title"> {superhero}</h5>
                        </Link>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (alter_ego !== characters) &&
                            <p className="text-muted">{characters}</p>
                        }
                        <p className="card-text">
                            <small className='text-muted'>{first_appearance}</small>

                        </p>
                        <Link to={`/hero/${id}`}>Más</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
