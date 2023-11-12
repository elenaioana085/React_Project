import { useState, useEffect } from "react";

const API_URL = "http://localhost:3002/destinations";

export const handleFavor = (cardId) => {

    let newList = [];
    let key = "userNumePackage";
    if (storedPref) {
      let existingId = storedPref.find(
        (preference) => preference === cardId
      );
      if (existingId) {
        newList = storedPref.splice(existingId);
      } else {
        newList.push(cardId);
      }
    } else {
      newList.push(cardId);
    }
    persistPreferences(key, JSON.stringify(newList));
  };