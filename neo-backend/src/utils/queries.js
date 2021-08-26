export const createMessageTable = `
DROP TABLE IF EXISTS messages;
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  message VARCHAR NOT NULL
  )
  `;

export const insertMessages = `
INSERT INTO messages(name, message)
VALUES ('chidimo', 'first message'),
      ('orji', 'second message')
`;

export const createNodesTable = `
DROP TABLE IF EXISTS nodes;
CREATE TABLE IF NOT EXISTS nodes (
  acc VARCHAR PRIMARY KEY,
  id VARCHAR DEFAULT '',
  name VARCHAR DEFAULT '',
  company VARCHAR DEFAULT '',
  import_flag boolean DEFAULT false,
  create_date DATE DEFAULT now()
  )
`

export const createEdgesTable = `
DROP TABLE IF EXISTS edges;
CREATE TABLE IF NOT EXISTS edges (
  acc_a VARCHAR NOT NULL,
  tx_direction VARCHAR DEFAULT '',
  acc_b VARCHAR NOT NULL,
  amt VARCHAR DEFAULT '$1',
  seq VARCHAR PRIMARY KEY,
  import_flag boolean DEFAULT false,
  create_date DATE DEFAULT now()
  )
`


export const dropMessagesTable = 'DROP TABLE messages';
