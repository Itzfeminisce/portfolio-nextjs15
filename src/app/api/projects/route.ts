import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const filePath = join(process.cwd(), '/src/app/api/', 'projects.json');
    const jsonData = JSON.parse(readFileSync(filePath, 'utf-8'));
    return NextResponse.json(jsonData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return NextResponse.error();
  }
}
