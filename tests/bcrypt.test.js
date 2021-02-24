const bcrypt = require('bcryptjs');


bcrypt.hash('pepe',6).then(r => console.log(r));

bcrypt.compare('pepe1','$2a$06$62QzlStKCNcwY6NuQnMJies3bvNK8J4wKwQJ5gyhqfie1BRKEu1Ky').then(console.log);