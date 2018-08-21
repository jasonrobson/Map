import React from "react";

export const todoCompleted = obj => String(obj.completed);
export const todoName = obj => String(obj.name);
export const todoId = obj => String(obj.id);
export const getTodosInformation = (list, func) => list.map(func);
