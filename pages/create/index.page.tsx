import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <p>You do not have a resume yet. Create one now!</p>
      <Link href="/create/personal">Create resume</Link>
    </>
  );
}
