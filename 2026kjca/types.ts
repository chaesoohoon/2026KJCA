import React from 'react';

export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  content?: React.ReactNode;
  bgImage?: string;
}

export interface ChartData {
  name: string;
  value: number;
  target?: number;
}