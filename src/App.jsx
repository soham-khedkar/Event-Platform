import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { getData } from "./db/db";
import { WalletConnectButton } from "./components/wallet/connect-button";
import { Button } from '@headlessui/react';
import SearchBar from "./components/SearchBar/SearchBar";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import clsx from 'clsx';
import {Link} from 'react-router-dom'

const foods = getData();

function App() {
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
        <SearchBar onSearch={handleSearch} />
        <div className="flex items-center space-x-4">
          <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white hover:bg-sky-500 active:bg-sky-700">
            <Link to='/add-event'>ADD YOUR EVENT</Link> 
          </Button>
        </div>
      </div>
      <div>

      </div>
      <WalletConnectButton />
    </>
  );
}

export default App;
