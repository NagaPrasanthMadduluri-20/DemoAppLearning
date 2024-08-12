"use client"

import React, { useEffect } from 'react'
import { getUsers } from "@/lib/users";
import { useState } from "react";
import Category from './components/users/Category'
import Header from './components/Header';

const HeaderParent = (params) => {
const [categorySlug, setCategorySlug] = useState("")
const [users, setUsers] = useState(null)
const [error, setError] = useState(null)
const {lang} = params


useEffect(() => {
  const fetchInitialData = async () => {
    try {
      const { users, error } = await getUsers(categorySlug || '', lang);
      setUsers(users);
      setError(error);
    } catch (err) {
      setError(err.message);
    }
  };

  fetchInitialData();
}, [categorySlug, lang]);

const setSelectedCategory = async (slug) => {
    console.log("slug", slug);
  setCategorySlug(slug)
 
  
}
  return (
    <div>
        <Header lang={params.lang} categorySlug={categorySlug} setSelectedCategory={setSelectedCategory} />
        {users && <Category params={{ users, lang }} />}
        {error && <div>Error: {error}</div>}
    </div>
  )
}

export default HeaderParent