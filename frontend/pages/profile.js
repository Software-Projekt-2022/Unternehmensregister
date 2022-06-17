import React, { useEffect } from 'react'
import { useRouter } from "next/router";
import { useSession } from "next-auth/react"
import NoPerm from "../components/NoPerm"
import $ from "jquery";

let profileJSON = {}
let userJSON = {}
let companyJSON = {}
let loaded = false;

async function getProfileData(id) {
  console.log("ProfileData for ID: " + id);
  const response = await $.ajax({
    url: "http://185.194.217.213:8085/api/profile/getProfileByID/" + id,
    method: "GET",
    dataType: "json",
    success: function (data) {
      profileJSON = data;
      document.getElementById('p_aboutme').innerText = profileJSON.aboutme;
    },
    error: function (data) {
      alert("Couldn't find profile!");
    },
  });
};

async function getUserData(id) {
  console.log("UserData for ID: " + id);
  const response = await $.ajax({
    url: "http://185.194.217.213:8085/api/user/getUserByID/" + id,
    method: "GET",
    dataType: "json",
    success: function (data) {
      userJSON = data;
      document.getElementById('p_name').innerText = userJSON.forename + ", " + userJSON.surname;
      document.getElementById('p_age').innerText = userJSON.age;
      document.getElementById('p_email').innerText = userJSON.email;
      getCompanyData(userJSON.company_id);
      //console.log(userJSON);
    },
    error: function (data) {
      alert("Couldn't find UserData!");
    },
  });
};

async function getCompanyData(id) {
  console.log("Company for ID: " + id);
  const response = await $.ajax({
    url: "http://185.194.217.213:8085/api/company/getByID/" + id,
    method: "GET",
    dataType: "json",
    success: function (data) {
      companyJSON = data;
      document.getElementById('p_status').innerText = userJSON.status+" at " + companyJSON.name + "(" +companyJSON.abbrevation+")";
      //console.log(companyJSON);
    },
    error: function (data) {
      console.log("Couldn't find Company Data!");
    },
  });
};

export default function Profile() {
    const { data: session } = useSession()
    const router = useRouter();
    useEffect(() => {
      if (session) {
        getProfileData(router.query.id);
        getUserData(router.query.id);
        loaded = true;
      }
    });
    if (session) {
      console.log("NOW LOADED");
      return (
            <>
                <img src={session.user.image} className="rounded-circle" width="150" />
                <h1><div id="p_name">UNDEFINED</div></h1>
                <h2>Age</h2>
                <div id="p_age"></div>
                <h2>Email</h2>
                <div id="p_email"></div>
                <h2>About me</h2>
                <div id="p_aboutme"></div>
                <h2>Occupation</h2>
                <div id="p_status"></div>
            </>
        )
      }
      return (
        <>
          <NoPerm />
        </>
      )
}