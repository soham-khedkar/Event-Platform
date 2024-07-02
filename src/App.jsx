import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { getData } from "./db/db";
import { WalletConnectButton } from "./components/wallet/connect-button";
import { Button } from '@headlessui/react';
import SearchBar from "./components/SearchBar/SearchBar";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import clsx from 'clsx';

const foods = getData();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchResults, setSearchResults] = useState(foods);

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    tele.MainButton.text = "Pay :)";
    tele.MainButton.show();
  };

  const handleSearch = (searchTerm) => {
    const results = foods.filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h1 className="heading text-left text-2xl font-bold">iVentto</h1>
        <div className="flex items-center space-x-4">
          <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white hover:bg-sky-500 active:bg-sky-700">
            ADD YOUR EVENT
          </Button>
        </div>
      </div>
      
      <SearchBar onSearch={handleSearch} />

      <TabGroup>
        <TabList className="flex justify-center space-x-4 bg-gray-200 p-4">
          <Tab>
            {({ selected }) => (
              <button
                className={clsx(
                  'py-2 px-4 rounded-lg focus:outline-none',
                  selected ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-300'
                )}
              >
                Tab 1
              </button>
            )}
          </Tab>
          <Tab>
            {({ selected }) => (
              <button
                className={clsx(
                  'py-2 px-4 rounded-lg focus:outline-none',
                  selected ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-300'
                )}
              >
                Tab 2
              </button>
            )}
          </Tab>
          <Tab>
            {({ selected }) => (
              <button
                className={clsx(
                  'py-2 px-4 rounded-lg focus:outline-none',
                  selected ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-300'
                )}
              >
                Tab 3
              </button>
            )}
          </Tab>
        </TabList>

        <TabPanels className="p-4">
          <TabPanel>
            <div className="cards__container grid grid-cols-3 gap-4">
              {searchResults.map((food) => (
                <Card key={food.id} food={food} onAdd={onAdd} onRemove={onRemove} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <p>Content 2</p>
          </TabPanel>
          <TabPanel>
            <p>Content 3</p>
          </TabPanel>
        </TabPanels>
      </TabGroup>

      <WalletConnectButton />
    </>
  );
}

export default App;
