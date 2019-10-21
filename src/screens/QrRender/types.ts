import React from 'react';


export type BoxProps = {
  height?:string;
  background?:string;
  children?:React.ReactNode;
};

export type ButtonProps = {
  onClick?: () => void;
  name?: String;
}