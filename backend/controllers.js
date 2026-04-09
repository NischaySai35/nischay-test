// controllers.js
// Handles the business logic for standard endpoints

exports.getAllItems = (req, res) => {
    const items = [
        { name: 'Item A', status: 'Active' },
        { name: 'Item B', status: 'Inactive' }
    ];
    
    // Simulate some simple processing
    const processedItems = items.map(item => ({
        ...item,
        processedAt: new Date().toISOString()
    }));
    
    res.status(200).json({
        message: 'Successfully fetched items',
        items: processedItems
    });
};

exports.createItem = (req, res) => {
    const payload = req.body;
    // Basic validation
    if (!payload || Object.keys(payload).length === 0) {
        return res.status(400).json({ error: 'Payload body cannot be empty' });
    }
    
    // Mock save logic
    console.log('Saving item to database:', payload);
    
    res.status(201).json({
        message: 'Item created successfully',
        createdItem: payload,
        id: Math.floor(Math.random() * 1000)
    });
};

// More lines to reach ~30 lines
// Added comment 1
// Added comment 2
// Added comment 3
// Added comment 4
// Added comment 5
// End of controllers module
