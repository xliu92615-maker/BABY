const fs = require('fs');
let code = fs.readFileSync('src/components/HomeEventSlider.tsx', 'utf8');
code = code.replace("import { useState, useEffect, useCallback } from 'react';", "import React, { useState, useEffect, useCallback } from 'react';");
fs.writeFileSync('src/components/HomeEventSlider.tsx', code);
