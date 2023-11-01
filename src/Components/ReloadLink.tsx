import React from 'react';

interface ReloadLinkProps {
  to: string;
  children: React.ReactNode;
}

const ReloadLink: React.FC<ReloadLinkProps> = ({ to, children }) => {
  const handleClick = () => {
    // Reload the document when the link is clicked
    window.location.reload();
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default ReloadLink;