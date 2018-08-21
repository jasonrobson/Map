import React from "react";

export const todoInformation = element => information =>
  String(element[information]);
export const getTodosInformation = (list, information) =>
  list.map(element => todoInformation(element)(information));
