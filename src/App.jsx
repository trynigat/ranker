import {useState} from 'react';
import {DndContext, useSensor, useSensors, PointerSensor, TouchSensor, closestCenter} from '@dnd-kit/core';
import {arrayMove, SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable';
import SortableItem from "./components/cards/gameCard/SortableItem.jsx";
import Input from "./components/atoms/input/Input.jsx";
import TextButton from "./components/atoms/textButton/TextButton.jsx";
import axios from "axios";
import SerachCard from "./components/cards/searchCard/SerachCard.jsx";
import {ClipLoader} from "react-spinners";


function App() {


    const [searchedGames, setSearchedGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchSearchedGames = async (query) => {




        setIsLoading(true);


        try{
            const response = await axios.get(`http://localhost:3000/api/searchedGames?title=${query}`);
            setSearchedGames(response.data.games || []);
        }finally {
            setIsLoading(false);
        }


    }

    const handleChange = (e) => {
        fetchSearchedGames(e.target.value);
    };


    const [games, setGames] = useState([
        {id: '1', title: 'Cyberpunk 2077', img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/coaih8.webp'},
        {
            id: '2',
            title: 'Star Wars Jedi: Survivor',
            img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co5uzk.webp'
        },
        {id: '3', title: 'Resident Evil 4', img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.webp'},
        {
            id: '4',
            title: 'Titanfall 2',
            img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/fhbeilnghyhhmjqhinqa.webp'
        },
    ]);


    // Uproszczone sensory (można je zdefiniować raz poza komponentem, żeby nie zaśmiecały App)
    const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor, {
        activationConstraint: {
            delay: 250,
            tolerance: 5
        }
    }));


    const handleDragEnd = ({active, over}) => {
        if (over && active.id !== over.id) {
            setGames((items) => {
                const oldIndex = items.findIndex(i => i.id === active.id);
                const newIndex = items.findIndex(i => i.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    return (

        <div>
            <header>
                <h1>Ranks</h1>
            </header>


            <main className="pwa-main-scroll">


                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={games} strategy={verticalListSortingStrategy}>
                        <div>
                            {games.map((game, index) => (
                                <SortableItem key={game.id} {...game} index={index}/>
                            ))}


                        </div>
                    </SortableContext>
                </DndContext>


                <div>

                    <Input placeholder={"Search games"} onChange={handleChange}> </Input>
                    {isLoading && <ClipLoader color="#36d7b7" size={30} />}
                    {!isLoading && searchedGames.map(game => (
                        <SerachCard key={game.id} title={game.name} cover={game.cover}></SerachCard>
                    ))}

                </div>

            </main>


        </div>


    );
}

export default App;